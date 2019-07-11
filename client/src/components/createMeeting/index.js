import React from "react";
import "./flatpickr.min.css";

function createMeeting(props) {
    return (
    <div>
        <section>
            <h2>Create meeting slot</h2>

            <p>Meeting slots that you create here can be booked by patients.</p>
            <form method="POST">

                <div>
                    <label for="field-start_date">Start date and time</label>
                    <input id="field-start_date" type="date" class="start_date_input" autocomplete="off" name="start_date" maxlength="64" autofocus required/>
                </div>

                <div>
                    <label for="field-duration">Duration (minutes)</label>
                    <input id="field-duration" type="number" autocomplete="off" name="duration" maxlength="2" required value="15"/>
                </div>

                <div class="buttons">
                    <input type="submit" value="Create"/>
                </div>

            </form>
        </section>
    </div>
    );
}

export default createMeeting;
