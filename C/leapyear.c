#include<stdio.h>
void main ()
{
    int n;
    printf("ENTER THE YEAR OF YOUR CHOICE");
    scanf ("%d",&n);
    (n%100==0)?((n%400)?printf ("LEAP YEAR"):printf (" NOT A LEAP YEAR") ):(n%4==0)?printf ("LEAP YEAR"):printf (" NOT A LEAP YEAR");
    
}