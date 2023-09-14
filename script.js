class Moto {

    #marca = "ninguna";
    #colorPrincipal = "elegir";

    setMarca(marca) {
        this.#marca = marca;

    }

    getMarca() {
        return this.#marca;

    }
    setColor(colorMoto) {
        this.#colorPrincipal = colorMoto;
    }
    getColor() {
        return this.#colorPrincipal;

    }
}
class Gpu {

    #fabricante = "ninguno";
    #submodelo = "ninguno";

    setFabricante(fabricante) {
        this.#fabricante = fabricante;

    }

    getFabricante() {
        return this.#fabricante;

    }
    setSubmodelo(submodelo) {
        this.#submodelo = submodelo;
    }
    getSubmodelo (){
        return this.#submodelo;
    }
}

const honda = new Moto();
const suzuki = new Moto();
const asus = new Gpu () ;
const xfx = new Gpu();


honda.setMarca("Honda");
suzuki.setMarca("Suzuki");

asus.setFabricante("ASUS");
xfx.setFabricante("XFX");

honda.setColor ("Negro");
suzuki.setColor ("Rojo");

asus.setSubmodelo("rtx-3070")
xfx.setSubmodelo("rx-6700")

console.log(honda.getmarca());
console.log(suzuki.getColor());
console.log(asus.getFabricante());
console.log(xfx.getSubmodelo());
