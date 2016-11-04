/**
 * Created by jeff on 11/3/16.
 */

public class LinkedList {
    Node head;
    int length;

    public LinkedList() {
        head = new Node(0);
        length = 1;
    }

    public LinkedList(int data) {
        head = new Node(data);
        length = 1;
    }

    public void push(int data) {
        Node toPush = new Node(data);
        Node current = head;
        while (current.getNext() != null) {
            current = current.getNext();
        }
        current.setNext(toPush);
        length++;
    }

    public void pop() {
        Node current = head;
        for (int i = 0; i < length - 2; i++) {
            current = current.getNext();
        }
        current.setNext(null);
        length--;
    }

    public int get(int index) {
        Node current = head;
        if(index < length) {
            for(int i = 0; i < index; i++) {
                current = current.getNext();
            }
            return current.getData();
        } else {
            return -1;
        }
    }

    public int getLength() {
        return length;
    }
}
