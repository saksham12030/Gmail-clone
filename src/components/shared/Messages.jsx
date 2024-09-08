import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Message from './Message'
import { useEffect, useState,  } from 'react';
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../../redux/appslice';

const Messages = () => {
  const { searchText } = useSelector((store) => store.appslice);
  const { emails } = useSelector((store) => store.appslice);
  const [tempEmail, setTempEmail] = useState(emails);
 
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe();
    /* eslint-disable */
  }, []);
 useEffect(() => {
   const filteredEmail = emails?.filter((email) => {
     return (
       email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
       email.to.toLowerCase().includes(searchText.toLowerCase()) ||
       email.message.toLowerCase().includes(searchText.toLowerCase())
     );
   });
   setTempEmail(filteredEmail);
 }, [searchText, emails]);
  return (
    <>
      {tempEmail &&
        tempEmail.map((email) => {
          return (
            <div key={email.id}>
              <Message email={email} />
            </div>
          );
        })}
    </>
  );
}
export default Messages;
