const apiKey = 'ZgsRxsBFvZiJ3lEy879114znt2LNcL6upQhOroqBjPxIPWeyxd-3qFHbvtdH_1PZoIbCixnvEe2RmKnK80Cd4Nm9lZM0tgEGHUgwg0Go25ApsIbKzlSg3KphmXF3XnYx';

export const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {
                Authorization: `Bearer ${apiKey}`,
            }}
        )
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        image: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        });
    }
};
