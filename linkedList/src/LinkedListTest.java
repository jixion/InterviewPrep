public class LinkedListTest {
    public static LinkedList list;

    public static void main(String[] args) {

        // Default constructor - let's put "0" into head element.
        list = new LinkedList();

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

		/*
		 * Please note that primitive values can not be added into LinkedList directly. They must be converted to their
		 * corresponding wrapper class.
		 */
        for(int i = 0; i < list.getLength(); i++) {
            System.out.println("Print: list: \t\t" + list.get(i));
        }
    }

}