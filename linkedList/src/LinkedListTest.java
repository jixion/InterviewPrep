public class LinkedListTest {
    public static LinkedList list;

    public static void main(String[] args) {

        // Default constructor - let's put "0" into head element.
        list = new LinkedList(0);

        // add more elements to LinkedList
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.pop();
        list.pop();
        list.push(42);
        list.push(42);
        list.push(42);
        list.push(42);
        list.pop();
        list.pop();
        list.push(3);
        list.push(4);
        list.pop();
        list.remove(4);
        list.remove(3);
        list.remove(42);
        list.remove(0);
        list.remove(-42);
        list.remove(2);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(0);
        list.remove(-1);



        for(int i = 0; i < list.getLength(); i++) {
            System.out.println("Print: list: \t\t" + list.get(i));
        }
    }

}