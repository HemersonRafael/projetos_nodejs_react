import React from 'react'
import {Router} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div>
            <h3>Menu Administrativo</h3>
            <div className="list-group">
                <a className="list-group-item list-group-item-action active">
                    Selecione uma opção
                </a>
                <a href="admin/portfolio" className="list-group-item list-group-item-action">Portifolio</a>
                
            </div>
        </div>
    );
}
export default AdminMenu;