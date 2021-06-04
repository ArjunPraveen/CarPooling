const User = require('../models/User')
const Ride = require('../models/Ride')
let exp = {};

exp.requestRide = async(req,res)=> {
    try{
        let {pickupPoint,
        destination,
        travelDate, 
        modeOfTransport} = req.body

        //bookingDate=Date.now() 
        // convert date here
            
                
        const userID = req.token['userID']
        const user = await User.findOne({userID: userID})
        if(!user){
            return res.send({success: false, msg: "User not found"})
        }


        let id_obj = await Ride.find({}, { rideID: 1, _id: 0 })
                .sort({ rideID: -1 })
                .limit(1);
            let rideID = 12000000;
            if (id_obj[0]) {
            rideID = id_obj[0].rideID + 1;
            }

        

        const users = [userID]
        const newRide = new Ride({
            rideID,
            pickupPoint,
            destination,
            rideInitiator : userID,
            travelDate,
            users,
            modeOfTransport,
        })
        
        var registered = await newRide.save()
        console.log(registered)
        if(registered){
            var rides = user.rides
            rides.push(rideID)
            await User.updateOne({userID},{$set: {rides}} )
        }
        return res.send({
            success: true,
            msg: 'Registered event Successfully!',
        });
    }catch(err){
        console.log(err)
        //check enum error
        //  if(err.)
        return res.send({
            success: false,
            msg: 'Internal Server Error',
        });
    }

    //const user=req.cookies['token']

}

exp.joinExistingRide = async(req,res) => {
    try {
        const {rideID} = req.body
        const findRide = await Ride.findOne({rideID})
        if(!findRide){
            return res.send({success:false, msg: 'Ride is not available or has already been confirmed!'})
        }
        await Ride.updateOne({rideID}, {$set: {}})


    } catch (err) {
        
    }
}

exp.viewRides = async(req,res) => {
    
}

exp.editRide = async(req,res) => {

}

module.exports = exp