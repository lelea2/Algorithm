Referenced from http://www.toptal.com/sql/interview-questions

### 1. What does UNION do? What is the difference between UNION and UNION ALL?

* UNION merges the contents of two structurally-compatible tables into a single combined table. The difference between UNION and UNION ALL is that UNION will omit duplicate records whereas UNION ALL will include duplicate records.

* Performance of UNION ALL will typically be better than UNION, since UNION requires the server to do the additional work of removing any duplicates. So, in cases where is is certain that there will not be any duplicates, or where having duplicates is not a problem, use of UNION ALL would be recommended for performance reasons.

### 2. List and explain the different types of JOIN clauses supported in ANSI-standard SQL
