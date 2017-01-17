###### 1. Best practice for ECS
* Store state and inputs, outputs in S3 or another datastore
* Minimize depedencies between task definitions
* Use Splot Instances and Splot fleets for long-running batch jobs
* Monitor cluster state with ECS APIs
* Share pools of resources
* Auto scaling, VPC, IAM, scheduled Reserved Instances

