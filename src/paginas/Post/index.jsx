import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo';
import { ReactMarkdown as Markdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import PostCard from 'components/PostCard';

export default function Post() {
    // o hook useParams() retorna um objeto contendo o parâmetro dinâmico (id) informado no Route path (/posts/:id) e armazena na const parametros.
    const parametros = useParams();

    // através de .find() no array posts, ele retorna o post que possui o mesmo id que o id de parametros, que corresponde ao id da URL atual. O valor é armazenado na const post. 
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    // Através do .filter, cria um novo array contendo apenas os posts que são diferentes do post atual, evitando que ele apareça juntamente com os posts recomendados. 
    const postRemoverAtual = posts.filter((post) => {
        return post.id !== Number(parametros.id);
    })

    // através do .sort, randomizamos os elementos do array filtrado postRemoverAtual. 
    const randomizarPosts = postRemoverAtual.sort(() => 0.5 - Math.random());

    // através do .slice, separamos apenas os 4 primeiros posts do array sorteado. 
    let postsRecomendados = randomizarPosts.slice(0, 4)

    // caso o post retorne como undefined, a pagina NaoEncontrada será exibida.
    if (!post) {
        return <NaoEncontrada />
    }

    // Definimos o componente PostModelo como elemento filho de PaginaPadrao, que poderá ser renderizado ao ser passado como prop children para o componente PaginaPadrao, sendo renderizado pelo Outlet. 
    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className='post-markdown-container'>
                    <Markdown>
                        {post.texto}
                    </Markdown>
                </div>

                <h2 className="tituloOutrosPosts">Outros posts que você pode gostar:</h2>
                <ul className="postsRecomendados">
                    {postsRecomendados.map((postRecomendado) => {
                        return (<li key={postRecomendado.id}>
                            <PostCard post={postRecomendado} />
                        </li>
                        )
                    })}
                </ul>
            </PostModelo>

        </PaginaPadrao>
    )
}
