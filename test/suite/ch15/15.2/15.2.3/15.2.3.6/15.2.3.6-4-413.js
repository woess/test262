/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-413.js
 * @description ES5 Attributes - Successfully add a property to an object when the object's prototype has a property with the same name and [[Writable]] set to true (Object.create)
 */


function testcase() {
        var appointment = {};

        Object.defineProperty(appointment, "startTime", {
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(appointment, "name", {
            value: "NAME",
            writable: true,
            enumerable: true,
            configurable: true
        });

        var meeting = Object.create(appointment);
        Object.defineProperty(meeting, "conferenceCall", {
            value: "In-person meeting",
            writable: true,
            enumerable: true,
            configurable: true
        });

        var teamMeeting = Object.create(meeting);
        teamMeeting.name = "Team Meeting";
        var dateObj = new Date("10/31/2010 08:00");
        teamMeeting.startTime = dateObj;
        teamMeeting.conferenceCall = "4255551212";

        var hasOwnProperty = teamMeeting.hasOwnProperty("name") &&
            teamMeeting.hasOwnProperty("startTime") &&
            teamMeeting.hasOwnProperty('conferenceCall');

        return hasOwnProperty && teamMeeting.name === "Team Meeting" &&
            teamMeeting.startTime === dateObj &&
            teamMeeting.conferenceCall === "4255551212";
    }
runTestCase(testcase);
