package main

import (
	"time"

	"github.com/gin-gonic/gin"
)

var states = []struct {
	State   string `json:"state"`
	Capital string `json:"capital"`
}{
	{"Andhra Pradesh", "Amaravati"},
	{"Arunachal Pradesh", "Itanagar"},
	{"Assam", "Dispur"},
	{"Bihar", "Patna"},
	{"Chhattisgarh", "Raipur"},
	{"Goa", "Panaji"},
	{"Gujarat", "Gandhinagar"},
	{"Haryana", "Chandigarh"},
	{"Himachal Pradesh", "Shimla"},
	{"Jharkhand", "Ranchi"},
	{"Karnataka", "Bengaluru"},
	{"Kerala", "Thiruvananthapuram"},
	{"Madhya Pradesh", "Bhopal"},
	{"Maharashtra", "Mumbai"},
	{"Manipur", "Imphal"},
	{"Meghalaya", "Shillong"},
	{"Mizoram", "Aizawl"},
	{"Nagaland", "Kohima"},
	{"Odisha", "Bhubaneswar"},
	{"Punjab", "Chandigarh"},
	{"Rajasthan", "Jaipur"},
	{"Sikkim", "Gangtok"},
	{"Tamil Nadu", "Chennai"},
	{"Telangana", "Hyderabad"},
	{"Tripura", "Agartala"},
	{"Uttarakhand", "Dehradun"},
	{"Uttar Pradesh", "Lucknow"},
	{"West Bengal", "Kolkata"},
}

var unionTerritories = []struct {
	Territory string `json:"territory"`
	Capital   string `json:"capital"`
}{
	{"Andaman and Nicobar Islands", "Sri Vijayapuram"},
	{"Chandigarh", "Chandigarh"},
	{"Dadra and Nagar Haveli and Daman & Diu", "Daman"},
	{"Delhi (NCT)", "Delhi"},
	{"Jammu & Kashmir", "Srinagar (Summer), Jammu (Winter)"},
	{"Ladakh", "Leh"},
	{"Lakshadweep", "Kavaratti"},
	{"Puducherry", "Puducherry"},
}

func main() {
	r := gin.Default()

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "ok",
			"service": "states-service",
			"time":    time.Now().Format(time.RFC3339),
		})
	})

	// States endpoint
	r.GET("/states", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message":          "🗺️ All States",
			"states":           states,
			"unionTerritories": unionTerritories,
			"time":             time.Now().Format(time.RFC3339),
		})
	})

	r.Run(":3003")
}
