class Area
{
    int len;
    int bre;
    Area()
    {
        System.out.println("Welcome to Area class");
    }
    Area(int x,int y)
    {
        this.len=x;
        this.bre=y;
    }
    void calculate()
    {
        System.out.println("AREA="+len*bre);
    }
}
cass calculation
{
    public static void main (String arg[])
    {
        Area a1=new Area();
        Area a2=new Area (7,8)
        a1.calculate();
        a2.calculate();
    }
}
