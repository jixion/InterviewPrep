/**
 * Created by jeff on 11/3/16.
 */

public class LinkedList {
    Node head;
    int length;

    public LinkedList() {
        head = null;
        length = 0;
    }

    public LinkedList(int data) {
        head = new Node(data);
        length = 1;
    }

    public void push(int data) {
        if(head == null) {
            head = new Node(data);
            length++;
        } else {
            Node toPush = new Node(data);
            Node current = head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            current.setNext(toPush);
            length++;
        }
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

    public Node get(int index, int bcz) {
        Node current = head;
        if(index < length) {
            for(int i = 0; i < index; i++) {
                current = current.getNext();
            }
            return current;
        } else {
            return new Node(bcz);
        }
    }

    public LinkedList remove(int index) {
        LinkedList removedFrom = new LinkedList();
        if(index > 0 && index < length) {
            for(int i = 0; i < index; i++) {
                removedFrom.push(get(i));
            }
            for(int i = index + 1; i < length; i++) {
                removedFrom.push(get(i));
            }
            return removedFrom;
        } else {
            return this;
        }
    }

    public int getLength() {
        return length;
    }
}
