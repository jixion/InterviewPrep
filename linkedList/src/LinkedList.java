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

    public void remove(int index) {
        if(length == 0) {
            return;
        }
        if(index > 0 && index < length) {
            Node toRemove = get(index, -1);
            Node current = get(index-1, -1);
            current.next = toRemove.next;
            length--;
        } else if (index == 0) {
            head = head.next;
            length--;
        }
    }

    public int getLength() {
        return length;
    }
}
