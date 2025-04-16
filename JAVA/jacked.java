class jacked
{
static void calling_array(int ar[])
{System.out.println("Array as:");
for(int i=0;i<ar.length;i++)
{
System.out.println(ar[i]);
}
}
public static void main(String args[])
{
int arr[]= {23, 45, 67, 78,89};
System.out.println(">>>>>>>>>>>>>>1D array>>>>>>>>>>>>>");
calling_array(arr);
int ar2[][]= new int[3][3];
for(int i=0;i<3;i++){
for(int j=0;j<3;j++){
ar2[i][j]= i+j;
}
}
System.out.println(">>>>>>>>>>>>>>2D array>>>>>>>>>>>>>");
for(int i=0;i<3;i++){
for(int j=0;j<3;j++){
System.out.print(ar2[i][j]);
}
System.out.println("");
}
System.out.println("\n\n");

int d2arr[][] = {{1,2,3},{3,4,5},{6,7,8}};
for(int i=0;i<d2arr.length;i++){
for(int j=0;j<d2arr[i].length;j++){
System.out.print(d2arr[i][j]);
}
System.out.println("");
}
System.out.println(">>>>>>>>>>>>>>Jagged array>>>>>>>>>>>>>");
int jag[][]= {{2,3},{1,4,5},{6,6,7}};
for(int i=0;i<jag.length;i++){
for(int j=0;j<jag[i].length;j++){
System.out.print(jag[i][j]);
}
System.out.println("");
}
int jag2[][] = new int[3][];
int count=0;
jag2[0]= new int[3];
jag2[1]= new int[2];
jag2[2]= new int[4];
for(int i=0;i<jag2.length;i++)
{
for (int j=0;j<jag2[i].length;j++)
{
jag2[i][j]=count++;
}
}
for(int i=0;i<jag2.length;i++)
{
for (int j=0;j<jag2[i].length;j++)
{
System.out.print(jag2[i][j]);
}
System.out.println("");
}
}
}
