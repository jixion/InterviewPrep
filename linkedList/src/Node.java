/**
 * Created by jeff on 11/3/16.
 */
public class Node {
    int data;
    Node next;

    public Node() {
        data = 0;
    }

    public Node(int d) {
        this.data = d;
    }

    public int getData() {
        return this.data;
    }

    public void setData(int d) {
        this.data = d;
    }

    public Node getNext() {
        return this.next;
    }

    public void setNext(Node n) {
        this.next = n;
    }
}
