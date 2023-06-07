import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const Profil = () => {
    return (
        <div className="profil">
            <form>
                <p>Nom :</p>
                <p>Prénom :</p>
                <p>Email :</p>
                <p>Date de naissance :</p>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/login">
                    <button>Logout</button>
                </Link>
            </form>
        </div>
    );
}
