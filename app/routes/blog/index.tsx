import { useLoaderData } from "remix";
import {Layout} from "~/components/layout";
import {Navigation} from "~/components/navigation";

export const loader = () => {
    return '';
};

export default function Blog() {
    const posts = useLoaderData();
    return (
        <Layout>
            <Navigation/>
            <h3>Blog Overview</h3>
        </Layout>
    );
}