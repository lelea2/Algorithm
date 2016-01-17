Referenced
* http://www.toptal.com/sql/interview-questions
* http://www.techrepublic.com/blog/software-engineer/sql-server-database-developer-interview-questions-and-answers/

### 1. What does UNION do? What is the difference between UNION and UNION ALL?

* Both merges the contents of two structurally-compatible tables into a single combined table.

* UNION will omit duplicate records, UNION ALL will include duplicate records.

* Performance of UNION ALL will typically be better than UNION, since UNION requires the server to do the additional work of removing any duplicates. So if certainly no duplicated records, UNION ALL should be used

### 2. List and explain the different types of JOIN clauses supported in ANSI-standard SQL

**INNER JOIN** (default type of JOIN)
* Returns all rows for which there is at least one match in BOTH tables.

**LEFT JOIN (or LEFT OUTER JOIN)**
* Returns all rows from the left table, and the matched rows from the right table; i.e., the results will contain all records from the left table, even if the JOIN condition doesn’t find any matching records in the right table. This means that if the ON clause doesn’t match any records in the right table, the JOIN will still return a row in the result for that record in the left table, but with NULL in each column from the right table.

**RIGHT JOIN (or RIGHT OUTER JOIN)**
* Returns all rows from the right table, and the matched rows from the left table. This is the exact opposite of a LEFT JOIN; i.e., the results will contain all records from the right table, even if the JOIN condition doesn’t find any matching records in the left table. This means that if the ON clause doesn’t match any records in the left table, the JOIN will still return a row in the result for that record in the right table, but with NULL in each column from the left table.

**FULL JOIN (or FULL OUTER JOIN)**
* Returns all rows for which there is a match in EITHER of the tables. Conceptually, a FULL JOIN combines the effect of applying both a LEFT JOIN and a RIGHT JOIN; i.e., its result set is equivalent to performing a UNION of the results of left and right outer queries.

**CROSS JOIN**
* Returns all records where each row from the first table is combined with each row from the second table (i.e., returns the Cartesian product of the sets of rows from the joined tables). Note that a CROSS JOIN can either be specified using the CROSS JOIN syntax (“explicit join notation”) or (b) listing the tables in the FROM clause separated by commas without using a WHERE clause to supply join criteria (“implicit join notation”).

### 3. Find result from 2 queries result

```sql
SELECT count(*) AS total FROM orders; ==> Return 100

SELECT count(*) AS cust_123_total FROM orders WHERE customer_id = '123'; ==> return 15

SELECT count(*) AS cust_not_123_total FROM orders WHERE customer_id <> '123' ==> return??

```
* The query above, we will need to account for the case wher customer_id is null, which will be in the result set of query (1). However, query(3) result set will not contain null result, therefore, the count will be <=85, depending on if customer_id contains null input

### 4. What is the operator to check for null in SQL?

* Use "is" operator to check for null in SQL

```sql
//Wrong
select case when null = null then 'Yup' else 'Nope' end as Result; ==> this will yield for 'Nope'

//Correct
select case when null is null then 'Yup' else 'Nope' end as Result;

```

### 5. SQL "NOT IN" operator ==> IMPORTANT if the set contains null

* If the set being evaluated by the SQL NOT IN condition contains any values that are null, then the outer query here will return an empty set.

* Correct queries will need to check to omit null
```sql
SELECT * FROM runners WHERE id NOT IN (SELECT winner_id FROM races WHERE winner_id IS NOT null)
```

### 6. What is a key difference between Truncate and Delete?

* **Truncate** is used to delete table content and the action CANNOT be rolled back

* **Delete** is used to delete one or more rows in the table and CAN be rolled back.

### 7.

