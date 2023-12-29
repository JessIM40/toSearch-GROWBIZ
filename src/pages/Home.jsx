import { useState, useEffect } from "react";
import toFetch from "../toFetch";


function Home() {
   
    const [items, setItems] = useState(null);

    useEffect(() => {
        toFetch(setItems)
    }, [])

  return (
    <>
    <main>
        <section>
            { items != null ? (items.map((item, it) => 
                <div key={it}>                
                    <div>
                        {item.data.map((text, t) => 
                            <div key={t}>
                                <p>{text.title}</p>
                                <p>{text.description}</p>
                                <p>{text.media_type}</p>
                            </div>)}
                        {item.links.map((img, im) =>
                            <div key={im}>
                                <img src={img.href}/>
                            </div>)}
                    </div>
                </div> 
            )) : 'no hay items'}
        </section>
    </main>
    </>
  )
}

export default Home;