// Java code for linked list implementation
import java.util.LinkedList;

class Main {
  public static void main(String[] args) {
    LinkedList<Integer> nums = new LinkedList<Integer>();

    nums.add(1);
    nums.add(2);

    for (Integer n: nums) {
      System.out.println(n);
    }
  }
}