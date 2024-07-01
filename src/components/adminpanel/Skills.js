


import React, { useState } from 'react';
import axios from 'axios';

const Skills = () => {
    const [skillname, setSkillname] = useState('');
    const [skillpercentage, setSkillpercentage] = useState('');

    const buttonSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3006/skills', {
                skillname,
                skillpercentage
            })
            .then((res) => {
                console.log(res);
                alert('Skill added successfully');
            })
            .catch((err) => {
                console.error(err);
                alert('Error adding skill');
            });
    };

    return (
        <div className="container">
            <form onSubmit={buttonSubmit}>
                <input
                    type="text"
                    placeholder="Enter skill name"
                    value={skillname}
                    onChange={(e) => setSkillname(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter skill percentage"
                    value={skillpercentage}
                    onChange={(e) => setSkillpercentage(e.target.value)}
                />
                <button className="btn btn-success" type='submit'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default Skills;
