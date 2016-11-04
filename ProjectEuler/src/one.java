/**
 * Created by jeff on 11/3/16.
 */
public class one {
    public static void main(String[] args) {
        int total = 0;
        for(int i = 1; 3 * i < 1000; i++) {
            total += 3 * i;
        }
        for(int i = 1; 5 * i < 1000; i++) {
            total += 5 * i;
        }
        System.out.println(total);
    }
}
