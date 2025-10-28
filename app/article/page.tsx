import Link from "next/link";

const Article = () => {
    return (<ul>
        <li><button className="bg-blue-500 text-white py-2 px-4 rounded"><Link href="/article/1">Article 1</Link></button></li>
        <li><button className="bg-blue-500 text-white py-2 px-4 rounded"><Link href="/article/2">Article 2</Link></button></li>
        <li><button className="bg-blue-500 text-white py-2 px-4 rounded"><Link href="/article/3">Article 3</Link></button></li>
    </ul>);
};

export default Article;