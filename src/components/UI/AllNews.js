import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllNews = ({ allNews }) => {
    return (
        <Row>

            {
                allNews.map(news => (
                    <Col span={6} key={news.id}>
                        <Card>
                            <Image src={news.image_url} width={300} height={180} alt='hello' />
                            <h3>{news.title}</h3>
                            <p>Comment: {news.comment_count}</p>
                            <Link href={`news/${news?.id}`}>See Details</Link>
                        </Card>
                    </Col>
                ))
            }

        </Row>
    );
};

export default AllNews;


