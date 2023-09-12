class Moto {

    #marca = "def ninguna";
    #colorPrincipal = "elegir"

    setMarca(marca) {
        this.#marca = marca

    }

    getMarca() {
        return this.#marca

    }
    setColor(colorMoto){
    this.#colorPrincipal = colorMoto
}

getColor(){
return this.#colorPrincipal

}
}
const honda = new Moto()
const rav = new Moto()

const negro = new Moto()
const rojo = new Moto()

honda.setMarca("honda")
rav.setMarca("rav")



console.log(honda.getmarca())

