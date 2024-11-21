class patient {
    constructor(name, age, patientId) {
        this.name = name
        this.age = age
        this.patientId = patientId
    }
}

class inPatient extends patient {
    constructor(name, age, patientId, roomNumber) {
        super(name, age, patientId)
        this.roomNumber = roomNumber
    }
    assignRoom(roomNumber) {
        this.roomNumber = roomNumber
    }
    detailInfo() {
        return{
            name: this.name,
            age: this.age,
            patientId: this.patientId,
            roomNumber: this.roomNumber,
        }
    }
}

class outPatient extends patient {
    constructor(name, age, patientId, appointmentDate) {
        super(name, age, patientId)
        this.appointmentDate = appointmentDate
    }
    rescheduleAppoinment(appointmentDate) {
        this.appointmentDate = appointmentDate
    }
    detailInfo() {
        return{
            name: this.name,
            age: this.age,
            patientId: this.patientId,
            appointmentDate: this.appointmentDate
        }
    }
}

const inpatient = new inPatient("John Doe", 45, "P001")
inpatient.assignRoom("101A")
console.log(inpatient.detailInfo())

const outpatient = new outPatient("Jane Smith", 30, "P002")
outpatient.rescheduleAppoinment("2024-09-10")
console.log(outpatient.detailInfo())