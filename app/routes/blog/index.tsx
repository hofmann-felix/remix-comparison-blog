import { useLoaderData } from "remix";
import {Layout} from "~/components/layout";
import {Navigation} from "~/components/navigation";
import {getPosts} from "~/util/posts";
import {Link} from "@remix-run/react";

export const loader = () => {
    return getPosts();
};

export default function Blog() {
    const posts = useLoaderData();
    return (
        <Layout>
            <Navigation/>
            <h3>Blog Overview</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}