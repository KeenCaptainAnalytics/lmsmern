import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

class Car{

}
class CollectionTest{
    public static void main(String[] args) {
        HashSet<Car> c = new HashSet<>();
        Car obj = new Car();
        c.add(obj);
        c.add(new Car());

        System.out.println(c);

        // ArrayList<Car> list = new ArrayList<>(c);
        ArrayList<Car> list = new ArrayList<>(30);

        System.out.println(list);

        // Collection 
        // Collection<Integer> list2 = new ArrayList<>();
        // ArrayList<Integer> list = new ArrayList<>();

    }
}

// interface ATM{
//     int size();
// }

// class ICICI implements ATM{

//     public int size(){
//         return 30;
//     }
     
//     public void printNameBank(){
//         System.out.println("icici welcomes you");
//     }
// }


// class CollectionTest{
//     // interface ,  implementation class 

//     public static void main(String[] args) {

        // ATM obj = new ICICI();
        // obj.size();
        // obj.printNameBank();

        // ICICI obj2 = new ICICI();
        // obj2.size();
        // obj2.printNameBank();
        // ICICI obj = new ICICI();

        // ATM obj = new ATM() ;
// collection framework  => collection of classes and interface


        // Collection 
        // atm machine => sbi => pnb card, yes card, canara
        // atm machine => pin amount, saving (services )

        // interface => objects cannot be made 
        // implementation class = > interface

//     }
// }