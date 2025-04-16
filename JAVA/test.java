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