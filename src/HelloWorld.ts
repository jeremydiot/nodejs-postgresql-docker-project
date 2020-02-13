export default class HelloWorld{

    private message: String;

    constructor(message: String = "Hello World"){
        this.message = message;
    }

    public show(){
        console.log(this.message);
    }
    
}