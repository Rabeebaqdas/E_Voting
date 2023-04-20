import { createContext, useEffect, useState } from "react";
import { contractAbi } from "../utils/constant";
import { contractAddress } from "../utils/constant";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
export const Store = createContext();
const { ethereum } = window;

const getVotingContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const votingContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return votingContract;
};

const VotingProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentAccount, setCurrentAccount] = useState();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState();
  const [admin, setAdmin] = useState();
  const [age, setAge] = useState();
  const [presidents, setPresidentsCandidates] = useState([]);
  const [winnerVicePresident, setWinnerVicePresident] = useState();
  const [winnerPresident, setWinnerPresident] = useState();
  const [vicePresidents, setVicePresidentsCandidates] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    designation: "",
    age: "",
    education: "",
    walletAddress: "",
    imgUrl: "",
  });

  const checkWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (err) {
      // setError(err.message);
      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (!ethereum) return alert("Please Install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
      setLoading(false);
    } catch (err) {
      throw new Error("No ethereum object.");
    }
  };

  ethereum.on("accountsChanged", async (account) => {
    setCurrentAccount(account[0]);
  });

  ethereum.on("chainChanged", async () => {
    window.location.reload();
  });

  const changeNetwork = async () => {
    try {
      setLoading(true);
      
      if (!ethereum) throw new Error("No crypto wallet found");
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            // chainId: "0x5"        // goerli
            // chainId: "0x7A69",     //localhost (31337)
            chainId: "0x539",         //localhost (1337)
            // chainId: "0xAA36A7",    //sepolia
          },
        ],
      });
      await connectWallet();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const getState = async () => {
    const res = await getVotingContract().state();
    console.log(res);
    setState(res);
  };

  const getAdmin = async () => {
    const res = await getVotingContract().admin();
    setAdmin(res);
  };

  const getPresident = async () => {
    const res = await getVotingContract().getpresident();
    console.log("Winner",res)
    setWinnerPresident(res);
  };

  const getVicePresident = async () => {
    const res = await getVotingContract().getVicePresident();
    console.log("Winner VP",res)
    setWinnerVicePresident(res);
  };

  const getCandidates = async () => {
    const res = await getVotingContract().getCandidates();
    for (let i = 0; i < res.length; i++) {
      if (res[i].CandidateDesignation.toString() == 0) {
        console.log("VP", res[i].CandidateDesignation.toString());
        setVicePresidentsCandidates((prevState) => [...prevState, res[i]]);
      } else {
        setPresidentsCandidates((prevState) => [...prevState, res[i]]);
      }
    }
  };

  const changeState = async () => {
    try {
      setLoading(true);
      const res = await getVotingContract().ChangeState();
      await res.wait();
      await getState();
      alert("Phase Started Successfully");
      setLoading(false);
    } catch (err) {
      if(err.code == 4001) {

        alert(err.message);
      }else {
        let temp = JSON.stringify(err)
        temp = JSON.parse(temp)
        alert(temp.reason)
       
      }
      setLoading(false);
      
    }
  };

  const addCandidate = async (info) => {
    try {
      setLoading(true);
      const res = await getVotingContract().AddCandidateToVoting(
        info.name,
        info.designation,
        info.age,
        info.education,
        info.walletAddress,
        info.imgUrl
      );
      await res.wait();
      alert("Registration Completed Successfully");
      setInfo({
        name: "",
        designation: "",
        age: "",
        education: "",
        walletAddress: "",
        imgUrl: "",
      });
      setLoading(false);
    } catch (err) {
      if(err.code == 4001) {
        alert(err.message);
      }else {
        let temp = JSON.stringify(err)
        temp = JSON.parse(temp)
        alert(temp.reason)
     
      }
      setLoading(false);
      
    }
  };

  const addVoter = async () => {
    try {
      setLoading(true);
      const res = await getVotingContract().VoterRegisteration(age);
      await res.wait();
      alert("Registration Completed Successfully")
      setAge("");
      setLoading(false);
    } catch (err) {
      if(err.code == 4001) {

        alert(err.message);
      }else {
        let temp = JSON.stringify(err)
        temp = JSON.parse(temp)
        alert(temp.reason)
 
      }
      setLoading(false);
      
    }
  };

  const Vote = async (id,type) => {
    try {
      setLoading(true);
      const res = await getVotingContract().ToVote(id,type);
      await res.wait();
      setAge("");
      setLoading(false);
      navigate("/dashboard-vote-casted-success");
    } catch (err) {
      if(err.code == 4001) {

        alert(err.message);
      }else {
        let temp = JSON.stringify(err)
        temp = JSON.parse(temp)
        alert(temp.reason)
      
      }
      setLoading(false);
      
    }
  };

  const Abstain = async (type) => {
    try {
      setLoading(true);
      const res = await getVotingContract().abstain(type);
      await res.wait();
      setAge("");
      setLoading(false);
      navigate("/abstain-1");
    } catch (err) {
      if(err.code == 4001) {

        alert(err.message);
      }else {
        let temp = JSON.stringify(err)
        temp = JSON.parse(temp)
        alert(temp.reason)
   
      }
      setLoading(false);
      
    }
  };

  useEffect(() => {
    getState();
    getAdmin();
  }, [currentAccount]);

  useEffect(() => {
    getCandidates();
  }, []);

  useEffect(()=>{
    if(state ==3){
      getPresident();
      getVicePresident();
    }
  },[state])

  return (
    <Store.Provider
      value={{
        changeNetwork,
        currentAccount,
        info,
        addVoter,
        setAge,
        age,
        loading,
        state,
        admin,
        presidents,
        vicePresidents,
        changeState,
        setInfo,
        addCandidate,
        Vote,
        Abstain,
        winnerVicePresident,
        winnerPresident
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default VotingProvider;
