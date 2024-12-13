export default async function handler(req, res) {
    console.log("weather for zipcode request", req);
    return res.status(200).json({
        zipcode: req.query.zipcode,
        weather: "sunny",
        temperature: 35,
    });
}
