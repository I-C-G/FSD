class c1
{
    int l=5;
    void display(){
        System.out.println("Value of l="+l);
    
    }
}
class c2 extends c1{
    int b=10;
    void calculate(){
        System.out.println("Calculation="+l*b);
    }
}
class test{
    public static void main(String args[]){
        c2 o1=new c2();
        o1.calculate();
        o1.display();
    }
}
//to create a class person with 2 attributes first name and last name 
// create 2 instance for the class and set the attribute value using constructor overloading and at the end display the information using display function
