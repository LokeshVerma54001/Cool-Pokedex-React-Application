

const getPokemonTypes = async(types) => {

    try {
        let i = 0;
        let typesImages = [];
        while(i<types.length){
            const data = await fetch(types[i].type.url);
            const tdata = await data.json();
            // console.log(tdata);
            typesImages.push(tdata.sprites['generation-vi']['x-y'].name_icon);
            i++;
        }
        // console.log(typesImages);
        return typesImages;

    } catch (error) {
        console.log(error);
        return [];
    }

}

export default getPokemonTypes