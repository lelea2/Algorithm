/**
 * You are given an n x n 2D matrix representing an image.
 *Rotate the image by 90 degrees (clockwise).
 */

//Idead
//By using the relation "matrix[i][j] = matrix[n-1-j][i]", we can loop through the matrix.
//Use temp to set matrix[i][j]
public void rotate(int[][] matrix) {
    int n = matrix.length;
    for (int i = 0; i < n / 2; i++) {
        for (int j = 0; j < Math.ceil(((double) n) / 2); j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp;
        }
    }
}
