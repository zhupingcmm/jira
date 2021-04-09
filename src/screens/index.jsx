import React, {useEffect, useState} from "react";
import {SearchPanel} from "./project-list/search-panel";
import {List} from "./project-list/list";
import qs from "qs";
import { cleanup } from "@testing-library/react";
import { cleanObject, useDebounce, useMount } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    const debouncedParam = useDebounce(param, 2000);

    useEffect(() => {
        console.log(qs.stringify(cleanObject(param)))
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if(response.ok){
                setList(await response.json()) 
            }
        })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel 
            param ={param}
            setParam={setParam}
            users={users}
        />
        <List 
            list={list}
            users={users}
        />
    </div>
}