import React from 'react'
import {PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'

export default function Home() {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry post={trending} colums={3} />
            </div>
        </section>
    )
}