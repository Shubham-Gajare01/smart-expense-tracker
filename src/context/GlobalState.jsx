import { createContext, useReducer, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        transactions: action.payload,
      };

    case "ADD":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🔄 FETCH DATA
  const fetchTransactions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "transactions"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: "SET", payload: data });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // ➕ ADD
  async function addTransaction(transaction) {
    try {
      await addDoc(collection(db, "transactions"), transaction);
      fetchTransactions();
    } catch (error) {
      console.error("Add error:", error);
    }
  }

  // ❌ DELETE
  async function deleteTransaction(id) {
    try {
      await deleteDoc(doc(db, "transactions", id));
      fetchTransactions();
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  // 🗑 CLEAR ALL (RESET)
  async function clearAllTransactions() {
    try {
      const querySnapshot = await getDocs(collection(db, "transactions"));

      const deletePromises = querySnapshot.docs.map((docItem) =>
        deleteDoc(doc(db, "transactions", docItem.id))
      );

      await Promise.all(deletePromises);

      dispatch({ type: "SET", payload: [] });
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        clearAllTransactions, // 🔥 ADDED HERE
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};