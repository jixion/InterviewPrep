/**
 * Created by jeff on 11/3/16.
 */
import java.util.ArrayList;
public class two {
    public static void main(String[] args) {
        int total = 0;
        ArrayList<Integer> fibs = new ArrayList<>();
        fibs.add(1);
        fibs.add(2);
        for(int i = 1; i < 100000; i++) {
            int fibInstance = fibs.get(i-1) + fibs.get(i);
            if(fibInstance < 4000000) {
                fibs.add(fibInstance);
            } else {
                for(int j : fibs) {
                    if(j%2==0) {
                        total += j;
                    }
                }
                break;
            }
        }
        System.out.println(total);
    }
}
