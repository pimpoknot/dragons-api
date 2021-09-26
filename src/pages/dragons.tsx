import { useSession } from "next-auth/client";
import { useState } from "react"
import styles from '../styles/DragonsPage/styles.module.scss';
import { Header } from '../components/Header'
import DragonsCards from "../components/DragonsCards";
import DragonsTable from "../components/DragonsTable";
import HeaderContent from "../components/Header/HeaderContent";
import CreateDragonButton from '../components/Buttons/CreateDragonButton'
import DeniedAccess from "../components/DeniedAccess";

export default function Dragons() {

    const [session] = useSession()
    const [ListView, setListView] = useState(true)

    let viewrMode = ListView
    return session ? (
        ListView ? (
            <>
                <Header title="Lista de Dragoes" />
                <HeaderContent>
                    <CreateDragonButton name="Criar Dragao"/>
                    <div className={styles.listMode}>
                        <button onClick={() => viewrMode ? setListView(false) : setListView(true)}>
                            {ListView ? 'Ver como Card' : 'Ver como Lista'}
                        </button>
                    </div>
                </HeaderContent>
                <DragonsTable />
            </>
        ) : (
            <>
                <Header title="Lista de Dragoes" />
                <HeaderContent>
                    <CreateDragonButton name="Criar Dragao"/>
                    <div className={styles.listMode}>
                        <button onClick={() => viewrMode ? setListView(false): setListView(true)}>
                            {ListView ? 'Ver como Card' : 'Ver como Lista'}
                        </button>
                    </div>
                </HeaderContent>
                <DragonsCards />
            </>
        )
    ) : (
        <DeniedAccess />
    )



}
