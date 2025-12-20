

class student22{
// public static void main(String[] args) {
//     Scanner sc = new Scanner(System.in);

//     int x[][] = new int[3][3]; 
//     int sum1 = 0;
//     int sum2 = 0;

//     for (int i = 0; i < x.length; i++) {
//         for (int j = 0; j < x.length; j++) {
//         x[i][j] = sc.nextInt();
//     }
// }

//     for (int i = 0; i < x.length; i++) {

//         for (int j = 0; j < x[i].length; j++) {
//             if(i+j==2)
//             {
//                 sum1 += x[i][j];
//             }
//             if(x[i]==x[j])
//             {
//                 sum2 += x[i][j];
//             }
//         }
        
//     }
//     System.out.println(sum1);
//     System.out.println(sum2);

//     sc.close();

//Q-2 


// int x[][] = new int[3][];
// x[0] = new int[2]; // only two elemt
// x[1] = new int[4];
// x[2] = new int[3];
// int i, j, sum = 0;

// for (i = 0; i < x.length; i++) {
//     for (j = 0; j < x[i].length; j++) {
//         x[i][j] = sc.nextInt();

//     }
// }
// System.out.println("ok");
// for (i = 0; i < x.length; i++) {
//     for (j = 0; j < x[i].length; j++) {
//         sum += x[i][j];
//         System.out.print(x[i][j] + "\t");

//     }
//     System.out.println("s:"+sum);
//     sum = 0;

// // 1 1 1
// // 2 2 2
// // 3 3 3
// // ok
// // 1       1       s:2
// // 1       2       2       2       s:7
// // 3       3       3       s:9
// }

//Q-3 

// System.out.print("Enter Size of Row ");
//             int a[][] = new int[sc.nextInt()][];
//             int i, j;

//             for (i = 0; i < a.length; i++) {
//                 System.out.print("Enter no. of column ");
//                 a[i] = new int[sc.nextInt()];
//             }

//             for (i = 0; i < a.length; i++) {
//                 for (j = 0; j < a[i].length; j++) {
//                     a[i][j] = sc.nextInt();
//                 }
//             }
//             for (i = 0; i < a.length; i++) {
//                 for (j = 0; j < a[i].length; j++) {
//                     System.out.print(a[i][j] + "\t");
//                 }
//                 System.out.println();
//             }

//Q-4

// System.out.print("Enter no. of rows:- ");
// int x[][] = new int[sc.nextInt()][];
// int i, j, c = 1;

// for (i = 0; i < x.length; i++) {
//     x[i] = new int[i + 1];
// }

// for (i = 0; i < x.length; i++) {
//     for (j = 0; j < x[i].length; j++) {
//         x[i][j] = c++;
//     }
// }

// for (i = 0; i < x.length; i++) {
//     for (j = 0; j < x[i].length; j++) {
//         System.out.print(x[i][j] + "\t");
//     }
//     System.out.println();
// }
//Q-5

// int x[] = new int[4];
//         int i, j;
//         for (i = 0; i < x.length; i++) {
//             x[i] = sc.nextInt();
//         }

//         for (i = 0; i < x.length; i++) {
//             int count = 0;
//             for (j = i - 1; j >= 0; j--) {
//                 if (x[i] == x[j]) {
//                     count++;
//                     break;
//                 }
//             }
//         if (count == 0) 
//         {

//                 count = 0;
//                 for (j = i; j < x.length; j++) {
//                     if (x[i] == x[j]) {
//                         count++;
//                     }
//                 }
//                 System.out.println(x[i] + "  " + count);
//         }

//         }

//Q-6

// int x[] = new int[5];

//         System.out.println("Enter Number :- ");

//         for (int i = 0; i < x.length; i++) {
//             x[i] = sc.nextInt();
//         }

//         int temp;

//         for (int i = 0; i < x.length - 1; i++) {
//             for (int j = 0; j < x.length - 1 - i; j++) {

//                 if (x[j] > x[j + 1]) {
//                     temp = x[j];
//                     x[j] = x[j + 1];
//                     x[j + 1] = temp;//swap
//                 }
//             }
//         }

//         for (int j = 0; j < x.length; j++) {
//             System.out.print(x[j] + "\t");

//         }


// private int a, b;

// student11() {
//     a = 0;
//     b = 0;
// }

// student11(int x, int y) {
//     a = x;
//     b = y;
// }

// public int geta() {
//     return a;
// }

// public int getb() {
//     return b;
// }

// public static void main(String[] args) {
//     student11 d1 = new student11();
//     student11 d2 = new student11(7, 2);

//     System.out.println(d1.geta() + " " + d1.getb() + " " + d2.geta() + " " + d2.getb());
// }

private int roll_no;
private String name;
private float marks;

student22() {
    roll_no = 101;
    name = "Anjum";
    marks = 384;
}

student22(int x, String y, float z) {
    roll_no = x;
    name = y;
    marks = z;
}

public int getroll_no() {
    return roll_no;
}

public String getname() {
    return name;
}

public float getmarks() {
    return marks;
}

public static void main(String[] args) {
    // student22 s1 = new student22();
    student22 s2 = new student22(101, "anjum naaz", 347);
    student22 s3 = new student22(103, "naaz", 341);
    student22 s4 = new student22(102, "talha anjum", 346);
    if (s2.getmarks() > s3.getmarks() && s2.getmarks() > s4.getmarks()) {
        System.out.println(s2.getroll_no() + " " + s2.getname() + " " + s2.getmarks());
    }
    else if (s3.getmarks() >= s2.getmarks() && s3.getmarks() >= s4.getmarks()) {
        System.out.println(s3.getroll_no() + " " + s3.getname() + " " + s3.getmarks());
    }
    else if (s4.getmarks() >= s2.getmarks() && s4.getmarks() >= s3.getmarks()) {
        System.out.println(s4.getroll_no() + " " + s4.getname() + " " + s4.getmarks());
    }

}

}
