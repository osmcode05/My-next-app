

export default function ArticlePage({params} : {params : {id: string}}) {
    const {id} = params;
    return <div>Article Page {id}</div>;
}