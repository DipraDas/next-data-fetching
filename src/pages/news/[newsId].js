import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const NewsDetailsPage = ({ news }) => {
    return (
        <div>
            <h1>details</h1>
            <h1>{news?.title}</h1>
        </div>
    );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//     const res = await fetch('http://localhost:3123/news')
//     const newses = await res.json();

//     const paths = newses.map(news => ({
//         params: { newsId: news.id }
//     }))
//     return {
//         paths, fallback: false
//     }
// }


export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3123/news/${params.newsId}`)
    const data = await res.json();
    return {
        props: {
            news: data
        },
        // revalidate: 1
    }
}