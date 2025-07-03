| Feature        | `PUT`                                                 | `PATCH`                                               |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| **Purpose**    | Replace **entire** resource                           | Update **part of** the resource                       |
| **Idempotent** | ✅ Yes (same request = same result every time)         | ✅ Yes (usually, but depends on implementation)        |
| **Data Sent**  | Sends the full updated object                         | Sends only the fields that need to be changed         |
| **Use Case**   | Full update or overwrite                              | Partial update (e.g., updating just a name or status) |
| **Risk**       | Overwrites existing fields if not included in payload | Safer for small updates                               |
