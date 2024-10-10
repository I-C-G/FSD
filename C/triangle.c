#include<stdio.h>
void main ()
{
    float a,b,c;
    printf("ENTER LENGTH");
    scanf("%f%f%f",&a,&b,&c);
    if (a==b&&b==c&&a==c)
    {
        printf("EQUILATERAL TRIANGLE");
    }
    else if (a!=b&&b!=c&&a!=c)
    {
        printf("SCALENE TRIANGLE");
    }
    else 
    {
        printf("ISOSCELES TRIANGLR");
    }
}