import { signOut } from "@firebase/auth";
import { Timestamp, setDoc, doc, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { v4 } from "uuid";
import { auth, db, storage } from "../configuration/firebase";

//signout

export const signOutUser = async () => {
  await signOut(auth);
};

export const addTweet = async (userData: any, content: string) => {
  const id = v4();
  const tweetsCollRef = doc(db, "/koos", id);
  await setDoc(tweetsCollRef, {
    id,
    content,
    userId: userData.uid,
    sharedAt: Timestamp.fromDate(new Date()),
    username: userData.username,
    name: userData.name,
    profileImg: userData.profileImg,
  });
};

export const savingHeaderChange = async (
  headerImg: any,
  userData: any,
  fun: any
) => {
  if (!headerImg) return;
  try {
    let storageRef = ref(storage, `/images/${userData.uid}/${headerImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, headerImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressVal = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        alert(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveHeaderURLToFirebase(downloadURL, userData, fun);

          updateDoc(doc(db, "users", userData.uid), {
            headerImg: downloadURL,
          });
        });
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export const savingProfileImgChange = (
  profileImg: any,
  userData: any,
  fun: any
) => {
  try {
    let storageRef = ref(storage, `/images/${userData.uid}/${profileImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, profileImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressVal = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        alert(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveProfileURLToFirebase(downloadURL, userData, fun);
          console.log(downloadURL, "url");
        });
      }
    );
  } catch (e) {
    console.log(e);
  }
};
const saveProfileURLToFirebase = async (
  downloadURL: string,
  userData: any,
  fun: any
) => {
  const result = await updateDoc(doc(db, "users", userData.uid), {
    profileImg: downloadURL,
  });
  console.log(result, "result");
  fun(false);
};

const saveHeaderURLToFirebase = async (
  downloadURL: string,
  userData: any,
  fun: any
) => {
  const result = await updateDoc(doc(db, "users", userData.uid), {
    headerImg: downloadURL,
  });
  console.log(result, "result");
  fun(false);
};
