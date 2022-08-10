import { set, ref, database as db, onValue } from "../config/firebase"

// delete data if it crossed 24 hours

export const deleteConfessnotes = () => {
    onValue(ref(db, "confessions"), (snapshot) => {
        let _data = snapshot.val();
        for (let key in _data) {
          let createdAt = new Date(_data[key].createdAt);
          createdAt.setDate(createdAt.getDate() + 1); // 24 hours
          if (new Date() >= createdAt) {
            console.log("Exceeded 24hours, it has to be delete from db.");
            set(ref(db, "confessions/" + key), null);
          }
        }
      });
}