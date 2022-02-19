export class Greeter{
  greeting: string;
  construtor(message: string){
    this.greeting = message
  }
  getGreeting(){
    return "Olá, "+ this.greeting;
  }
}